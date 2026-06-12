// Classe abstrata Pessoa
abstract class Pessoa {

    private String nome;
    private int idade;
    private String matricula;

    public Pessoa(String nome, int idade, String matricula) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public void exibirDados() {
        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade);
        System.out.println("Matrícula: " + matricula);
    }

    public abstract double calcularBonus();
}


// Classe Aluno
class Aluno extends Pessoa {

    private double nota1;
    private double nota2;

    public Aluno(String nome, int idade, String matricula,
                 double nota1, double nota2) {

        super(nome, idade, matricula);
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    public double calcularMedia() {
        return (nota1 + nota2) / 2;
    }

    public String verificarSituacao() {
        double media = calcularMedia();

        if (media >= 6) {
            return "Aprovado";
        } else if (media >= 4) {
            return "Recuperação";
        } else {
            return "Reprovado";
        }
    }

    @Override
    public double calcularBonus() {
        return 0;
    }
}


// Classe Professor
class Professor extends Pessoa {

    private double salario;
    private String disciplina;

    public Professor(String nome, int idade, String matricula,
                     double salario, String disciplina) {

        super(nome, idade, matricula);
        this.salario = salario;
        this.disciplina = disciplina;
    }

    @Override
    public double calcularBonus() {
        return salario * 0.15;
    }

    @Override
    public void exibirDados() {
        super.exibirDados();
        System.out.println("Disciplina: " + disciplina);
        System.out.println("Salário: R$ " + salario);
        System.out.println("Bônus: R$ " + calcularBonus());
    }
}
