# Konverter Suhu dengan Built-in Method dan Tanpa Built-in Method

## Flowchart
```mermaid
flowchart TD
    A((start))
    B[/suhuCelcius/]
    C["suhuReamur = 4 / 5 * suhuCelcius"]
    D["suhuFahrenheit = (9 / 5 * suhuCelcius) + 32"]
    E["suhuKelvin = suhuCelcius + 273"]
    F[/suhuCelcius/]
    G[/suhuReamur/]
    H[/suhuKelvin/]
    I[/suhuFahrenheit/]
    Z(((stop)))

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    G --> H
    H --> I
    I --> Z
```