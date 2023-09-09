export interface SignUpProps {
    BusinessName: string;
    BusinessEmail: string;
    Password: string;
    ConfirmPassword: string;
  }
 interface User {
    name: string;
    id: string;
    token: string;
    company: string;
    image: string;
    role: string;
    hideListing: string;
    email: string;
  }
export interface SignUpResponse {
    status: number;
    message: string;
    user: User;
  }