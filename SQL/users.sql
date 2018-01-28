-- Faz o login
CREATE OR REPLACE FUNCTION doLogin(
  pEmail VARCHAR(50),
  pPass VARCHAR(50)
) RETURNS TABLE(
  "id" INTEGER,
  "name" VARCHAR(50),
  "email" VARCHAR(50),
  "pass" VARCHAR(50)
) AS $$
          BEGIN
            RETURN QUERY
            SELECT u.id, u.name, u.email, u.pass FROM users u
            WHERE u.email ILIKE pEmail AND u.pass LIKE pPass;
          END;
        $$
LANGUAGE plpgsql;

-- Cria usuario
CREATE OR REPLACE FUNCTION createUser(
  pName VARCHAR(50),
  pEmail VARCHAR(50),
  pPass VARCHAR(50)
) RETURNS json AS $$
    BEGIN
      INSERT INTO users (name, email, pass) VALUES (pName, pEmail, pPass);
      RETURN json_build_object(
        'message', 'Inserido com sucesso'
      );
    END;
  $$
  LANGUAGE plpgsql;