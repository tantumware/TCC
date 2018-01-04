using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace UFSCApp
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            var curso = new Model.Curso();
            curso.CargaHorariaMaxima = 22;
            curso.CargaHorariaMinima = 11;



            InitializeComponent();
            Logout.Clicked += async (sender, e) =>
            {
                App.IsUserLoggedIn = false;
                Navigation.InsertPageBefore(new View.LoginView(), this);
                await Navigation.PopAsync();
            };
        }
    }
}
