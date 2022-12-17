
export default class Api {
      static async  GetRequest(path: string): Promise<string> {
    try {
        const response = await fetch('https://randomuser.me/api/');
        console.log(response);
        const data = await response.json();
        console.log(data.results);
        return JSON.stringify(data.results);    
    }catch(e){
        return "null";
    }
}
}