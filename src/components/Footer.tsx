import { footerProps } from "@lib/types";

export default function Footer(Props:footerProps) {
  return (
    <div className="mt-3">
      <hr />
      <p className="text-secondary text-center">Copyright © {Props.year} {Props.fullName} {Props.studentId}</p>
    </div>
  );
}
