namespace backend.Models
{
    public class User
    {
            public Guid Id { get; set; } // esto es un identificador único para cada usuario, es como el id pero mejor, me lo explico gepetaso

            public string UserName { get; set; } = "";

            public string Email { get; set; } = "";

            public string Password { get; set; } = "";
    }
}