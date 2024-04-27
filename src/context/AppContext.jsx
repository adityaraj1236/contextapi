import { createContext, useState } from "react";
import { baseUrl } from "../Baseurl";

// 1) create context 
export const Appcontext = createContext();

// 2) create Provider 
// here children means App context provider component ke andar jo v likhunga wo uske childrens honge 
export default function AppcontextProvider({children}) {
    const [laoding , setLoading] = useState(false);
    const [posts , setPosts] = useState([]);
    const[page , setPage] = useState(1);
    const[totalPages , setTotalPages] = useState(null);


    // dat afilling pending using api now doing 
    async function fetchBlogPost(page=1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}` ;
        console.log("Printing the final url")
        console.log(url);

        try {
            const result =  await fetch(url);
            const data =  await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        } catch (error) {
            alert("Error in fetching data"); 
            setPage(1);
            setPosts([]);
            setTotalPages(null);
            
        }
        setLoading(false);
        
    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlogPost(page);
    }







    // now create an pbject value which we wil send to consy=umer s 
    const value =  {
        posts,
        setPosts,
        laoding,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlogPost

    };
    // ye hrr baar krrna padega 



    // ye hai step3)  ye teno hamesha krna hi hai 
    // ab now return app context procvide r syntax 
    return <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>

}


// 3) now ab saara ka saara data consumer ko paas krna padega  prr uske liye prrpare krna padega 

// ab bss kaise sbkso consume krenge using the hook khin bhi useContext hook 
