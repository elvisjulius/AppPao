import { useCallback, useState } from "react";
import { Produto } from "../interfaces";
import { apiService } from "../services/apiService";

export const endPoints = () => {
    const [item, setItem] = useState<Produto[]>();

        const getAll = useCallback(
          async() => {
            const { status, data } = await apiService.getAll();
            if (status !== 200) throw new Error();
            setItem(data);
          },
          [],
        )
        
    //     const { status, data } = await apiService.getAll();

    //     if (status !== 200) throw new Error();

    //     setItem(data);
    // }, [])

    return {
        getAll
    }
    }