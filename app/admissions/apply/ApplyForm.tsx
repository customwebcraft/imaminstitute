"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const enquirySchema = z.object({
  // keep whatever fields were already here
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  program: z.string().min(1, "Please select a program"),
  message: z.string().optional(),
});

type EnquiryForm = z.infer<typeof enquirySchema>;

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<EnquiryForm>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = (data: EnquiryForm) => {
    console.log(data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-navy">Application Submitted!</h2>
        <p className="text-ink-muted mt-2">We will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto">
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Full Name</label>
        <input {...register("name")} className="w-full border border-border rounded px-4 py-3 text-ink" placeholder="Your full name" />
        {errors.name && <p className="text-crimson text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Phone Number</label>
        <input {...register("phone")} className="w-full border border-border rounded px-4 py-3 text-ink" placeholder="+92 3XX XXXXXXX" />
        {errors.phone && <p className="text-crimson text-sm mt-1">{errors.phone.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Program of Interest</label>
        <select {...register("program")} className="w-full border border-border rounded px-4 py-3 text-ink bg-white">
          <option value="">Select a program</option>
          <option value="bs-nursing">BS Nursing (Generic)</option>
          <option value="cmw">Community Mid Wifery (Coming Soon)</option>
          <option value="lhv">Lady Health Visitor (Coming Soon)</option>
          <option value="cna">Certified Nursing Assistant (Coming Soon)</option>
        </select>
        {errors.program && <p className="text-crimson text-sm mt-1">{errors.program.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Message (Optional)</label>
        <textarea {...register("message")} rows={4} className="w-full border border-border rounded px-4 py-3 text-ink" placeholder="Any questions or additional info..." />
      </div>
      <button type="submit" className="w-full bg-crimson text-white font-semibold py-4 rounded hover:bg-crimson-dark transition-colors">
        Submit Enquiry
      </button>
    </form>
  );
}