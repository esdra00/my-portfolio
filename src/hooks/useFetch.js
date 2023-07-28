import {collection, getDocs, query} from "firebase/firestore";
import {useEffect, useState} from "react";
import {database} from "/src/firebase/firebase.js";

export function useFetch() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetch = async () => {
			const dataArr = [];
			const q = query(collection(database, `Projects`));
			const querySnapshot = await getDocs(q);

			querySnapshot.forEach((doc) => {
				dataArr.push(doc.data());
			});

			setData(dataArr);
		};
		fetch();
	}, []);

	return {data};
}
