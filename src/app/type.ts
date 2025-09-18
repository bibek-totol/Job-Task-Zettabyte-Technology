export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };


  export type PostCardProps = {
    id: number;
    title: string;
    body: string;
    
  };

  export type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    company: { name: string; catchPhrase: string };
    address: { street: string; suite: string; city: string; zipcode: string };
  };
  