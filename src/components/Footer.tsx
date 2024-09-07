import { footercomponent } from "@lib/types";
export default function Footer({year, fullName ,studentId} :footercomponent) {
  return (
    <div>
      Copyright ©{year} {fullName} {studentId}
    </div>
  );
}
