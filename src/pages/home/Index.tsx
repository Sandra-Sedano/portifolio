import { Avatar } from "../../components/Avatar";
import { ThemeController } from "../../components/TheameContoller";


export function Home() {

    return (
        <>
            <section className="flex justify-center items-center  gap-4 flex-col mt-4" >
                <Avatar />
                <div className="text-2xl"> @sandra_siano </div>
                <ThemeController />
                <h1 className="text-4xl" > Analista</h1>
            </section>
        </>
    )

}