// Classlardan iborat bolgan fileler tash topadi
// Classlar orqali Api servicelarni xosil qilamiz
// Product malumotlarini Backenddan olish u-n Product Service Api xozil qilamiz

import axios from "axios";
import { serverApi } from "../../lib/config";
import { Member } from "../../lib/types/member";

class MemberService {
    private readonly path: string;

    constructor() {
        this.path = serverApi;
    }

    // multi usage method
    public async getTopUsers(): Promise<Member[]> {
    try {
        const url = this.path + "/member/top-users";
        const result = await axios.get(url);
        console.log("getTopUsers:", result);

        return result.data;
    } catch (err) {
        console.log("Error, getTopUsers:", err);
        throw err;
    }
}
}

export default MemberService;  