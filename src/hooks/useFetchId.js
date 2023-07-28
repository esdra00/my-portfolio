import {doc, getDoc} from "firebase/firestore";
import {useEffect, useState} from "react";
import {database} from "/src/firebase/firebase.js";

export function useFetchID(id) {
	const [data, setData] = useState();

	useEffect(() => {
		const fetch = async () => {
			const docSnap = await getDoc(doc(database, "Projects", id));
			setData(docSnap.data());
		};
		fetch();
	}, [id]);

	return {data};
}
