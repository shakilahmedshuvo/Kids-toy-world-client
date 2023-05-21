import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Kids Toy World | ${title} `;
    }, [title])
};

export default useTitle;