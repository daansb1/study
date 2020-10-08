function adicionarIngrediente() {
    var ing = document.getElementById("ingrediente").value;

    var lista = document.getElementById("lista").innerHTML;

    listahtml = lista + "<li>"+ing+"</li>";

    document.getElementById("lista").innerHTML = listahtml;
}