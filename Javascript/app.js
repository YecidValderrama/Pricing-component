toggle.addEventListener('click', function () {
    if(toggle.checked){
        document.getElementById("Basic").innerHTML = "<h1><span>$</span>19.99</h1></div>"
        document.getElementById("Professional").innerHTML = "<h1><span>$</span>24.99</h1></div>"
        document.getElementById("Master").innerHTML = "<h1><span>$</span>39.99</h1></div>"
    } else {
        document.getElementById("Basic").innerHTML = "<h1><span>$</span>199.99</h1></div>"
        document.getElementById("Professional").innerHTML = "<h1><span>$</span>249.99</h1></div>"
        document.getElementById("Master").innerHTML = "<h1><span>$</span>399.99</h1></div>"
    }
});