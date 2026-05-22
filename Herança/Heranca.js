## Classe Pessoa

```java
public class Pessoa {
    protected String nome;
    protected int cpf;

    public Pessoa(String nome, int cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getCpf() {
        return cpf;
    }

    public void setCpf(int cpf) {
        this.cpf = cpf;
    }
}
```

---

## Classe Funcionario

```java
public class Funcionario extends Pessoa {
    private int registro;

    public Funcionario(String nome, int cpf, int registro) {
        super(nome, cpf);
        this.registro = registro;
    }

    public int getRegistro() {
        return registro;
    }

    public void setRegistro(int registro) {
        this.registro = registro;
    }

    public void mostrarDados() {
        System.out.println("Nome: " + nome);
        System.out.println("CPF: " + cpf);
        System.out.println("Registro: " + registro);
    }
}
```

---

# Exercício dos Animais

## Classe Animal

```java
public class Animal {
    protected String nome;
    protected float comprimento;
    protected int patas;
    protected String cor;
    protected String ambiente;
    protected float velocidade;

    public Animal(String nome, float comprimento, int patas,
                  String cor, String ambiente, float velocidade) {
        this.nome = nome;
        this.comprimento = comprimento;
        this.patas = patas;
        this.cor = cor;
        this.ambiente = ambiente;
        this.velocidade = velocidade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public float getComprimento() {
        return comprimento;
    }

    public void setComprimento(float comprimento) {
        this.comprimento = comprimento;
    }

    public int getPatas() {
        return patas;
    }

    public void setPatas(int patas) {
        this.patas = patas;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public String getAmbiente() {
        return ambiente;
    }

    public void setAmbiente(String ambiente) {
        this.ambiente = ambiente;
    }

    public float getVelocidade() {
        return velocidade;
    }

    public void setVelocidade(float velocidade) {
        this.velocidade = velocidade;
    }

    public void dados() {
        System.out.println("Nome: " + nome);
        System.out.println("Comprimento: " + comprimento + " cm");
        System.out.println("Patas: " + patas);
        System.out.println("Cor: " + cor);
        System.out.println("Ambiente: " + ambiente);
        System.out.println("Velocidade: " + velocidade + " m/s");
    }
}
```

---

## Classe Peixe

```java
public class Peixe extends Animal {
    private String caracteristica;

    public Peixe(String nome, float comprimento, int patas,
                  String cor, String ambiente, float velocidade,
                  String caracteristica) {

        super(nome, comprimento, patas, cor, ambiente, velocidade);
        this.caracteristica = caracteristica;
    }

    public String getCaracteristica() {
        return caracteristica;
    }

    public void setCaracteristica(String caracteristica) {
        this.caracteristica = caracteristica;
    }

    public void dadosPeixe() {
        dados();
        System.out.println("Característica: " + caracteristica);
    }
}
```

---

## Classe Mamifero

```java
public class Mamifero extends Animal {
    private String alimento;

    public Mamifero(String nome, float comprimento, int patas,
                     String cor, String ambiente, float velocidade,
                     String alimento) {

        super(nome, comprimento, patas, cor, ambiente, velocidade);
        this.alimento = alimento;
    }

    public String getAlimento() {
        return alimento;
    }

    public void setAlimento(String alimento) {
        this.alimento = alimento;
    }

    public void dadosMamifero() {
        dados();
        System.out.println("Alimento: " + alimento);
    }
}
```

---

## Classe TestarAnimais

```java
public class TestarAnimais {
    public static void main(String[] args) {

        Mamifero camelo = new Mamifero(
                "Camelo",
                150,
                4,
                "Amarelo",
                "Terra",
                2.0f,
                "Vegetais"
        );

        Peixe tubarao = new Peixe(
                "Tubarão",
                300,
                0,
                "Cinzento",
                "Mar",
                1.5f,
                "Barbatanas e cauda"
        );

        Mamifero ursoCanada = new Mamifero(
                "Urso-do-canadá",
                180,
                4,
                "Vermelho",
                "Terra",
                0.5f,
                "Mel"
        );

        System.out.println("=== CAMELO ===");
        camelo.dadosMamifero();

        System.out.println("\n=== TUBARÃO ===");
        tubarao.dadosPeixe();

        System.out.println("\n=== URSO DO CANADÁ ===");
        ursoCanada.dadosMamifero();
    }
}
```

---

## Exemplo de saída

```text
=== CAMELO ===
Nome: Camelo
Comprimento: 150.0 cm
Patas: 4
Cor: Amarelo
Ambiente: Terra
Velocidade: 2.0 m/s
Alimento: Vegetais

=== TUBARÃO ===
Nome: Tubarão
Comprimento: 300.0 cm
Patas: 0
Cor: Cinzento
Ambiente: Mar
Velocidade: 1.5 m/s
Característica: Barbatanas e cauda

=== URSO DO CANADÁ ===
Nome: Urso-do-canadá
Comprimento: 180.0 cm
Patas: 4
Cor: Vermelho
Ambiente: Terra
Velocidade: 0.5 m/s
Alimento: Mel
```

