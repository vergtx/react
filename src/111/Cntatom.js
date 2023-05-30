import { atom, selector } from "recoil";

 export const Cntatom = atom({
    key : 'Cntatom' ,
    default : 0


 });


 export const CntatomTwice = selector({     //아톰이 변견되면 셀렉터 호출되서 값 바뀜
    key : 'CntatomTwice' ,
    get : ({get}) => {
        return get(Cntatom) *2;
    }


 });

