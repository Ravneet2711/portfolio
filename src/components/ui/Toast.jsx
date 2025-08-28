import * as Toast from "@radix-ui/react-toast";
import { useToast } from "@/hooks/useToast";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";

const variantStyles = {
  success: "bg-green-600 text-white",
  error: "bg-red-600 text-white",
  info: "bg-blue-600 text-white",
  default: "bg-gray-900 text-white",
};

const variantIcons = {
  success: <CheckCircle className="w-5 h-5 mr-2" />,
  error: <AlertCircle className="w-5 h-5 mr-2" />,
  info: <Info className="w-5 h-5 mr-2" />,
  default: null,
};

const AppToast = () => {
  const { toastContent, open, setOpen } = useToast();
  const { title, description, variant } = toastContent;

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        duration={4000}
        className={`flex items-start space-x-3 max-w-sm p-4 rounded shadow-lg ${variantStyles[variant]}`}
      >
        {variantIcons[variant]}
        <div>
          <Toast.Title className="font-bold">{title}</Toast.Title>
          {description && (
            <Toast.Description className="text-sm mt-1">
              {description}
            </Toast.Description>
          )}
        </div>
        <Toast.Close className="ml-auto">
          <X className="w-4 h-4" />
        </Toast.Close>
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-4 right-4 z-50" />
    </Toast.Provider>
  );
};

export default AppToast;
