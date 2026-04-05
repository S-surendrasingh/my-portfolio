import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-6 py-24 sm:py-32">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="max-w-md text-base leading-7 text-muted">
        The page you&rsquo;re looking for may have been moved or never existed.
      </p>
      <Button href="/about" arrow="right">
        Back to About
      </Button>
    </Container>
  );
}
