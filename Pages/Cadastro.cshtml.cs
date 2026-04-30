using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ProjetoTypescriptMvc.Pages
{
    public class CadastroModel : PageModel
    {
        [BindProperty]
        public InputModel Input { get; set; } = new();

        public string? MensagemSucesso { get; private set; }

        public void OnGet()
        {
        }

        public void OnPost()
        {
            if (!ModelState.IsValid)
            {
                return;
            }

            MensagemSucesso = $"Cadastro recebido com sucesso para {Input.Nome}.";
            ModelState.Clear();
            Input = new InputModel();
        }

        public class InputModel
        {
            [Required(ErrorMessage = "Informe seu nome.")]
            [StringLength(80, MinimumLength = 3, ErrorMessage = "O nome deve ter entre 3 e 80 caracteres.")]
            public string Nome { get; set; } = string.Empty;

            [Required(ErrorMessage = "Informe seu e-mail.")]
            [EmailAddress(ErrorMessage = "Informe um e-mail valido.")]
            public string Email { get; set; } = string.Empty;
        }
    }
}
