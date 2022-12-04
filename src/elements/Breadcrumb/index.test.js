import react from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "./index";
import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
    const breadcrumbList = [
        { pageTitle: "Home", pageHref: ""},
        { pageTitle: "Kosan Details", pageHref: "" }
    ];

    const { container } = render(
        <Router>
            <Breadcrumb data={breadcrumbList} />
        </Router>
    );
    const breadcrumb = container.querySelector('.breadcrumbs')

    return {
        breadcrumb
    };
}

test("should have <div> with className .breadcrumbs and have text Home & Kosan Details", () => {
    const {breadcrumb} = setup();

    expect(breadcrumb).toBeInTheDocument()
    expect(breadcrumb).toHaveTextContent("Home")
    expect(breadcrumb).toHaveTextContent("Kosan Details")
})