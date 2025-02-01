import $ from "jquery";

const login = async (username: string, password: string) => {
    $.ajax({
        url: "https://ceg.projekt9.hu/api.php",
        type: "POST",
        data: {
            username: username,
            password: password,
            type: "login",
        },
        headers: {
            "Origin": "https://ceg.projekt9.hu",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "content-type",
            "Access-Control-Allow-Origin": "*",
        },
        success: function (result: any) {
            console.log(result);
        },
        error: function (_xhr, status, error) {
            console.error("Hiba:", status, error);
        },
    });
};

export default login;