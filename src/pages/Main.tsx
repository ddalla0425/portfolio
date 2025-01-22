import { Button } from "@/components/ui/button"
import {Heading6} from "lucide-react";

const Main = (): JSX.Element => {
    return (
        <>
            <div className="wrapper m-auto py-20">나 메인 페이지 컴포넌트얌!</div>
            <Button variant="outline">Button</Button>
            <Heading6 />
        </>
    );
};

export default Main;
