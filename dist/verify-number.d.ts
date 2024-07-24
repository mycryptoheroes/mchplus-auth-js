export declare class VerifyNumber {
    private clientId;
    private web3;
    private env;
    private lang;
    defaultAccount: string;
    constructor(clientId: any, provider: any, env: any, lang: any);
    get baseUrl(): string;
    getRegions(): Promise<any>;
    getAddress(): Promise<any>;
    sign(confirmationPin: any): Promise<any>;
    submitInput(phoneNumber: any, isCall: any): Promise<"Confirmed" | "Error">;
    submitConfirm(confirmationPin: any): Promise<any>;
}
export default VerifyNumber;
