import { Router, type IRouter } from "express";
import { db, contactMessagesTable } from "@workspace/db";
import { SendContactMessageBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parsed = SendContactMessageBody.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: parsed.error.issues[0]?.message ?? "Invalid input",
    });
  }

  try {
    const [row] = await db
      .insert(contactMessagesTable)
      .values(parsed.data)
      .returning({ id: contactMessagesTable.id });

    if (!row) {
      req.log.error("Insert returned no rows");
      return res
        .status(500)
        .json({ error: "Failed to save message. Please try again later." });
    }

    req.log.info({ id: row.id, email: parsed.data.email }, "Contact message saved");

    return res.status(201).json({
      id: row.id,
      success: true,
      message: "Message received. Neelima will get back to you soon.",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to insert contact message");
    return res
      .status(500)
      .json({ error: "Something went wrong. Please try again later." });
  }
});

export default router;
