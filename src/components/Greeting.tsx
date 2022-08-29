
type GreetingProps = {
    name: {
        firstName:string,
        lastName:string
    }[]
    messageCount:number
}
export const Greeting = (props: GreetingProps) => {

    return (<div>
        {props.name.map((n)=>{
            return(<ul>
                <li>
                    {n.firstName}
                </li>
            </ul>)
        })}
    </div>)

}