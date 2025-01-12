import {simpsons} from "../../data-simpsons-masive/simpsons.ts";
import {SimsonComponent} from "../SimsonComponent/SimsonComponent.tsx";


export const FamComponent = () => {
    return(
        <div>
            {
                simpsons.map((value,index)  => <SimsonComponent item={value} key={index}>
                    {value.info}
                </SimsonComponent>)
                }
        </div>
    )
}