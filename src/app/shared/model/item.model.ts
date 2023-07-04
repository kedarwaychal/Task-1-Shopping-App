export class item{
    ImgUrl: string;
    Name: string;
    Price:Number;
    InputNumber:any;
    

    constructor(rImgurl :string,rname : string,rprice :  Number,rnumber : number){
        this.ImgUrl = rImgurl;
        this.Name = rname;
        this.Price = rprice;
        this.InputNumber = rnumber;
    }
}