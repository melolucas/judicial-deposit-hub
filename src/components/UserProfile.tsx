import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserProfile = () => {
  // Mock user data - in a real app, this would come from your auth context
  const user = {
    name: "João Silva",
    email: "joao.silva@exemplo.com",
    image: "/placeholder.svg"
  };

  return (
    <div className="flex items-center gap-3 p-4 border-b">
      <Avatar>
        <AvatarImage src={user.image} alt={user.name} />
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="font-medium text-sm">{user.name}</span>
        <span className="text-xs text-muted-foreground">{user.email}</span>
      </div>
    </div>
  );
};