import React from "react";

export const Termsconditions = () => {
  return (
    <div className="grid gap-4 px-3">
      <div className="max-w-3xl mx-auto text-muted-foreground py-2">
        <h2 className="text-xl font-semibold text-foreground mb-4"></h2>
        <p>
          By accessing or using our website and services, you agree to these
          Terms and Conditions. If you do not agree, please discontinue use of
          our site and services.
        </p>
        <h2 className="text-xl font-semibold text-foreground mt-4 mb-4">
          Use of Services
        </h2>
        <p>
          You agree to use our services only for lawful purposes and in a manner
          that does not infringe the rights of, restrict, or inhibit anyone
          else&apos;s use of the website.
        </p>
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
          Booking and Payment
        </h2>
        <p>
          When booking an event, you must provide payment details. All bookings
          are subject to availability and confirmation. Payments must be made as
          outlined in the booking process.
        </p>
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
          Cancellation Policy
        </h2>
        <p>
          If you need to cancel an event booking, the following conditions apply
        </p>
        <div>
          <p className="pt-2 font-semibold text-foreground/75">Cancellations 30 Days or More Before Event Date:</p>
          <ul className="list-disc pl-4 py-1">
            <li>
              Full refund, minus any non-refundable deposit or processing fees.
            </li>
          </ul>
          <p className="pt-2 font-semibold text-foreground/75">Cancellations Between 14 to 20 Days Before Event Date:</p>
          <ul className="list-disc pl-4 py-1">
            <li>
              75% refund of the total booking amount, minus any non-refundable
              deposit or processing fees.
            </li>
          </ul>
          <p className="pt-2 font-semibold text-foreground/75">Cancellations Less than 10 Days Before Event Date:</p>
          <ul className="list-disc pl-4 py-1">
            <li>
              25% refund will be issued. However, you may be eligible to
              reschedule the event, depending on availability and at the
              discretion of EventCraft.
            </li>
          </ul>
          <p className="pt-2 font-semibold text-foreground/75">Cancellations Less than 4-5 Days Before Event Date:</p>
          <ul className="list-disc pl-4 py-1">
            <li>
              No refund will be issued. However, you may be eligible to
              reschedule the event, depending on availability and at the
              discretion of EventCraft.
            </li>
          </ul>
          <p className="pt-2 font-semibold text-foreground/75">No-Show:</p>
          <ul className="list-disc pl-4 py-1">
            <li>
              If you do not show up for the event or fail to inform us of a
              cancellation, no refund will be issued.
            </li>
          </ul>
        </div>

        <p className="pt-2 font-semibold text-foreground/75">
          Please note that some bookings may have additional cancellation
          restrictions based on the specific event or vendor. These will be
          clearly outlined in the booking confirmation and cancellation.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
          Refund Policy
        </h2>
        <p>
          Refunds are processed according to the cancellation terms outlined
          above.
        </p>
        <p className="pt-2 font-semibold text-foreground/75">Please note:</p>
        <ul className="list-disc pl-8 py-1">
          <li>
            Refunds will be credited to the original payment method within 5
            business days of cancellation confirmation.
          </li>
          <li>Certain non-refundable deposits or processing fees may apply.</li>
          <li>
            For rescheduled events, no refund is provided, but the payment can
            be applied toward the rescheduled date.
          </li>
          <li>
            EventCraft reserves the right to deny refund requests that do not
            comply with our cancellation policy.
          </li>
        </ul>
        <p className="mt-8 mb-4">
          If we need to cancel an event due to unforeseen circumstances or
          external factors, we will offer a full refund or an opportunity to
          reschedule the event, depending on user preference.
        </p>
      </div>
    </div>
  );
};
