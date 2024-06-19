import BreadCrumbLayout from "@/components/breadcrumb-layout";
import Container from "@/components/container";
import Header from "@/components/header/header";
import SearchBar from "@/components/search-bar";


const Listng = async () => {


    return (
        <>
            <section className="size-full">
                <Header />
                <SearchBar />
                <Container>
                    <BreadCrumbLayout />

                </Container>
            </section>

        </>
    );
}

export default Listng;