# GitMess

## Services

- API: https://localhost:5001
- UI: https://localhost:5001
- Git: ssh://localhost:2222

## How to run

1. Start services
```bash
docker compose up`
```

2. Create repo in server

Go to `https://localhost:5001` and use POST `/repository/{name}` to create a new repository. 

3. Set the remote on an existing repo

```bash
git remote add origin ssh://gituser@localhost:2222/data/git/repositories/{name}
git push origin main
```

4. Check on app

Go to `https://localhost:3001` from browser
