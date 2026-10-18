import { Router, type IRouter } from "express";
import { db, travelEnquiriesTable } from "@workspace/db";
import {
  CreateTravelEnquiryBody,
  CreateTravelEnquiryResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/enquiries", async (req, res): Promise<void> => {
  const parsed = CreateTravelEnquiryBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn(
      { errors: parsed.error.issues.map(({ path, code }) => ({ path, code })) },
      "Invalid travel enquiry",
    );
    res.status(400).json({ error: "Please check the enquiry details." });
    return;
  }

  try {
    const [enquiry] = await db
      .insert(travelEnquiriesTable)
      .values(parsed.data)
      .returning({ id: travelEnquiriesTable.id });

    if (!enquiry) {
      req.log.error("Travel enquiry insert returned no record");
      res.status(500).json({ error: "We couldn't save your enquiry. Please try again." });
      return;
    }

    res.status(201).json(
      CreateTravelEnquiryResponse.parse({
        id: enquiry.id,
        status: "received",
        message: "Your enquiry was received. Our team will follow up shortly.",
      }),
    );
  } catch (error) {
    req.log.error({ err: error }, "Failed to save travel enquiry");
    res.status(500).json({ error: "We couldn't save your enquiry. Please try again." });
  }
});

export default router;
