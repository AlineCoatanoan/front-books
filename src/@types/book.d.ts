
  
 export interface IBook {
    id: number;                   
    title: string;               
    slug: string;              
    image: string;           
    author: string;              
    difficulty: string;           
    description: string; 
    genres: string[];
    avis: string;
  }
  
 export type Books = IBook[];
  