import Heading from "@/ui/Heading";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import StringPassword from "@/ui/StrongPassword";

export default function Register() {
    return (
        <div className="">
            <form className="flex flex-col my-4 shadow-md rounded-md p-4 bg-pallete3 text-gray-600">
                <Heading type="h1" className="text-center">
                    Register Yourself
                </Heading>
                <label>First Name</label>
                <Input type="text" />
                <label>Surname</label>
                <Input type="text" />
                <label>Nickname</label>
                <div className="flex justify-center items-center space-x-2 mb-2">
                    <Input type="text" className="flex-1 mb-0" />
                    <Button className="text-md py-1">Verify</Button>
                </div>
                <label>Photo</label>
                <Input type="file" accept="image/png" />
                <label>Password</label>
                <StringPassword />
                <label>Repeat password</label>
                <Input type="password" autoComplete="new password" />

                <div className="flex justify-center mt-4">
                    <Button className="">Submit</Button>
                </div>
            </form>
        </div>
    );
}
