import { useEffect, useState } from "react";

const useServiceDetail = detailId => {
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `https://secret-woodland-47011.herokuapp.com/service/${detailId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [detailId]);
    return [service]
}

export default useServiceDetail;