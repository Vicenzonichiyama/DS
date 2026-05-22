// Classe abstrata Veiculo
abstract class Veiculo {
    private String marca;
    private String modelo;

    // Construtor
    public Veiculo(String marca, String modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // Método abstrato
    public abstract double calcularConsumo();

    // Método concreto
    public void exibirInformacoes() {
        System.out.println("Marca: " + marca);
        System.out.println("Modelo: " + modelo);
        System.out.println("Consumo: " + calcularConsumo() + " km/l");
    }

    // Getters
    public String getMarca() {
        return marca;
    }

    public String getModelo() {
        return modelo;
    }
}

// Classe Carro
class Carro extends Veiculo {
    private double cilindrada;

    public Carro(String marca, String modelo, double cilindrada) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }

    @Override
    public double calcularConsumo() {
        return 15.0 - (cilindrada / 200);
    }

    @Override
    public void exibirInformacoes() {
        super.exibirInformacoes();
        System.out.println("Cilindrada: " + cilindrada + " cc");
    }
}

// Classe Moto
class Moto extends Veiculo {
    private int cilindradas;

    public Moto(String marca, String modelo, int cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    @Override
    public double calcularConsumo() {
        return 30.0 - (cilindradas / 100.0);
    }

    @Override
    public void exibirInformacoes() {
        super.exibirInformacoes();
        System.out.println("Cilindradas: " + cilindradas + " cc");
    }
}

// Classe Caminhao
class Caminhao extends Veiculo {
    private double capacidadeCarga;

    public Caminhao(String marca, String modelo, double capacidadeCarga) {
        super(marca, modelo);
        this.capacidadeCarga = capacidadeCarga;
    }

    @Override
    public double calcularConsumo() {
        return 5.0 - (capacidadeCarga / 1000.0);
    }

    @Override
    public void exibirInformacoes() {
        super.exibirInformacoes();
        System.out.println("Capacidade de Carga: " + capacidadeCarga + " kg");
    }
}

// Classe Main
public class Main {
    public static void main(String[] args) {

        // Instanciando objetos
        Carro carro = new Carro("Toyota", "Corolla", 2000);
        Moto moto = new Moto("Honda", "CB500", 500);
        Caminhao caminhao = new Caminhao("Volvo", "FH", 3000);

        // Exibindo informações
        System.out.println("=== CARRO ===");
        carro.exibirInformacoes();

        System.out.println("\n=== MOTO ===");
        moto.exibirInformacoes();

        System.out.println("\n=== CAMINHÃO ===");
        caminhao.exibirInformacoes();
    }
}
