import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}  | Kids Toy World`;
    }, [title])
};

export default useTitle;