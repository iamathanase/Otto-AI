# Otto - Database

Database schema and configuration for Otto video platform.

## Current Status

⚠️ **Not yet implemented**

The current version uses client-side storage only. For production, you'll need to add a database.

## Recommended Setup

### Option 1: Supabase (Recommended)

**Why Supabase:**
- FREE tier available
- PostgreSQL database
- Built-in authentication
- Real-time subscriptions
- File storage
- Easy integration

**Setup:**
1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Run schema.sql
4. Add connection string to .env

### Option 2: MongoDB Atlas

**Why MongoDB:**
- FREE tier available
- Flexible schema
- Easy to scale
- Good for JSON data

### Option 3: PlanetScale

**Why PlanetScale:**
- FREE tier available
- MySQL compatible
- Branching workflow
- Serverless

## Proposed Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Videos Table
```sql
CREATE TABLE videos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  prompt TEXT NOT NULL,
  style VARCHAR(50),
  camera_motion VARCHAR(50),
  mood VARCHAR(50),
  aspect_ratio VARCHAR(10),
  duration INTEGER,
  video_url TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Credits Table
```sql
CREATE TABLE credits (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  amount INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Transactions Table
```sql
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  amount INTEGER NOT NULL,
  type VARCHAR(20), -- 'purchase', 'usage', 'refund'
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Implementation Steps

1. **Choose Database Provider**
   - Sign up for free tier
   - Create database

2. **Run Schema**
   - Execute schema.sql
   - Create indexes

3. **Update Backend**
   - Install database client
   - Add connection logic
   - Update API endpoints

4. **Update Frontend**
   - Add authentication
   - Fetch user videos
   - Display credits

5. **Add Features**
   - User registration
   - Video history
   - Credit system
   - Payment integration

## Files to Create

- `schema.sql` - Database schema
- `migrations/` - Database migrations
- `seeds/` - Sample data
- `config.ts` - Database configuration

## Environment Variables

```bash
# Add to .env
DATABASE_URL=postgresql://user:pass@host:5432/dbname
# or
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
```

## Next Steps

1. Choose database provider
2. Create schema
3. Implement authentication
4. Add video storage
5. Implement credit system

---

**Status:** 📝 Planning Phase
**Priority:** Medium (for production)
**Estimated Time:** 2-4 hours
