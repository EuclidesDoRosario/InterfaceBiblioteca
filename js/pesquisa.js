
    const ibusca = document.getElementById("pesquisainput");

    ibusca.addEventListener("keyup", () => {

        $(".d-busca").show();

        $(".d-busca").each(

            function () {

                var item = $(this).text().toLocaleLowerCase()

                if (item.indexOf(ibusca.value.toLocaleLowerCase()) < 0) {
                    $(this).hide();
                }
            }

        );

    });