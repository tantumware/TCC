using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace UFSCApp.View
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class LoginView : ContentPage
    {
        public LoginView()
        {
            InitializeComponent();

            this.loginButton.Clicked += async (sender, e) =>
             {
                 var c = new Model.Curso();
                 var l = new List<Model.Disciplina>();

                 var d = new Model.Disciplina();
                 d.Codigo = "CAD5240";
                 d.CargaHoraria = 36;
                 d.Fase = 1;
                 d.Horarios = new List<string>() { "5.2020" };
                 d.Nome = "Aspectos Comportamentais do Empreendedor";
                 d.Obrigatoria = true;
                 d.Requisitos = new List<string>() { };
                 l.Add(d);

                 d = new Model.Disciplina();
                 d.Codigo = "EGC5015";
                 d.CargaHoraria = 72;
                 d.Fase = 1;
                 d.Horarios = new List<string>() { "5.2020", "6.1830" };
                 d.Nome = "Teoria Geral de Sistemas";
                 d.Obrigatoria = true;
                 d.Requisitos = new List<string>() { };
                 l.Add(d);

                 d = new Model.Disciplina();
                 d.Codigo = "INE5601";
                 d.CargaHoraria = 72;
                 d.Fase = 1;
                 d.Horarios = new List<string>() { "5.2020", "6.1830" };
                 d.Nome = "Fundamentos Matemáticos da Informática ";
                 d.Obrigatoria = true;
                 d.Requisitos = new List<string>() { };
                 l.Add(d);

                 d = new Model.Disciplina();
                 d.Codigo = "INE5602";
                 d.CargaHoraria = 72;
                 d.Fase = 1;
                 d.Horarios = new List<string>() { "5.2020", "6.1830" };
                 d.Nome = "Introdução à Informática ";
                 d.Obrigatoria = true;
                 d.Requisitos = new List<string>() { };
                 l.Add(d);

                 d = new Model.Disciplina();
                 d.Codigo = "INE5603";
                 d.CargaHoraria = 108;
                 d.Fase = 1;
                 d.Horarios = new List<string>() { "5.2020", "6.1830" };
                 d.Nome = "Introdução à Programação Orientada a Objetos";
                 d.Obrigatoria = true;
                 d.Requisitos = new List<string>() { };
                 l.Add(d);

                 // ####################################

                 d = new Model.Disciplina();
                 d.Codigo = "CAD5146";
                 d.CargaHoraria = 36;
                 d.Fase = 2;
                 d.Horarios = new List<string>() { "5.2020" };
                 d.Nome = "Marketing Pessoal em Informática";
                 d.Obrigatoria = true;
                 d.Requisitos = new List<string>() { "CAD5240" };
                 l.Add(d);

                 d = new Model.Disciplina();
                 d.Codigo = "CAD7001";
                 d.CargaHoraria = 72;
                 d.Fase = 2;
                 d.Horarios = new List<string>() { "5.2020", "6.1830" };
                 d.Nome = "Introdução a Administração";
                 d.Obrigatoria = true;
                 d.Requisitos = new List<string>() { };
                 l.Add(d);

                 d = new Model.Disciplina();
                 d.Codigo = "INE5605";
                 d.CargaHoraria = 108;
                 d.Fase = 2;
                 d.Horarios = new List<string>() { "5.2020", "6.1830" };
                 d.Nome = "Desenvolvimento de Sistemas Orientados a Objetos I";
                 d.Obrigatoria = true;
                 d.Requisitos = new List<string>() { "INE5603" };
                 l.Add(d);

                 d = new Model.Disciplina();
                 d.Codigo = "INE5606";
                 d.CargaHoraria = 72;
                 d.Fase = 2;
                 d.Horarios = new List<string>() { "5.2020", "6.1830" };
                 d.Nome = "Probabilidade e Estatística";
                 d.Obrigatoria = true;
                 d.Requisitos = new List<string>() { "INE5601" };
                 l.Add(d);

                 d = new Model.Disciplina();
                 d.Codigo = "INE5607";
                 d.CargaHoraria = 108;
                 d.Fase = 2;
                 d.Horarios = new List<string>() { "5.2020", "6.1830" };
                 d.Nome = "Organização e Arquitetura de Computadores";
                 d.Obrigatoria = true;
                 d.Requisitos = new List<string>() { "INE5602", "INE5603" };
                 l.Add(d);

                 c.Nome = "Sistemas de Informação";
                 c.Disciplinas = l;

                 new Model.Decisor(c);

                 // Action<string> c = (x) => System.Diagnostics.Debug.WriteLine(x.ToLower());

                 //  c.Invoke("Java2s.com"); // or simply c("Java2s.com");

                 Action<int> i = (x) => System.Diagnostics.Debug.WriteLine(x >= 10);

                 i.Invoke(5); // or simply c("Java2s.com");
                 i.Invoke(11);

                 App.IsUserLoggedIn = true;
                 Navigation.InsertPageBefore(new MainPage(), this);
                 await Navigation.PopAsync();
             };
        }
    }
}
