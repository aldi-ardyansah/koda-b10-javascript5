# Konverter Suhu dengan Build-in Method dan Tanpa Build-in Method

## Flowchart
```mermaid
flowchart TD
    A((Start))
    B[/suhuDerajatCelcius/]
    C[/konversiKeDerajat/]
    D{konversiKeDerajat == #quot;Reamur#quot; #124;#124; #quot;Fahrenheit#quot; #124;#124; #quot;Kelvin#quot;}
    E{konversiKeDerajat == #quot;Reamur#quot;}
    F{konversiKeDerajat == #quot;Fahrenheit#quot;}
    G[suhuDerajatReamur = 4/5 * suhuDerajatCelcius]
    H[suhuDerajatFahrenheit = 9/5 * suhuDerajatCelcius + 32]
    I[suhuDerajatKelvin = suhuDerajatCelcius + 273]
    J[/suhuDerajatReamur/]
    K[/suhuDerajatFahrenheit/]
    L[/suhuDerajatKelvin/]
    Z(((Stop)))

    A --> B --> C --> D
    D --False--> Z
    D --True--> E
    E --False--> F
    E --True--> G
    F --False--> I
    F --True--> H
    G --> J
    H --> K
    I --> L
    J --> Z
    K --> Z
    L --> Z
```