import { Button } from "@/components/ui/button";

export default function LoginForm() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-4xl font-semibold"> ArkLab AI Agent Catalog</h1>

      <form>
        <Button type="submit" name="action" value="google">
          Sign in With google
        </Button>
      </form>
    </div>
  );
}
