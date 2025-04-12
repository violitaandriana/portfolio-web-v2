import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";

type CertificateCardProps = {
  title: string;
  description: string;
  className?: string;
};

export function CertificateCard({
  title,
  description,
  className,
}: CertificateCardProps) {
  return (
    <Card className={cn("group transition-transform hover:scale-102 pop-up", className)}>
      <CardHeader>
        <CardTitle className="">{title}</CardTitle>
        <CardDescription className="">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
