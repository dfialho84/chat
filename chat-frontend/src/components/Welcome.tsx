export default function Welcome() {
    return (
        <div className="p-4 border border-black h-full flex flex-col justify-center">
            <div className="text-pallete1 font-extrabold text-7xl text-center">
                Welcome to the Chat App
            </div>
            <div className="text-center text-pallete2 text-lg mt-4">
                This app was created using NextJs + React on The Fontend and
                Java + Spring Boot on The Back end using a Microservice
                Archtecture
            </div>
        </div>
    );
}
