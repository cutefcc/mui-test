---
nav:
  title: Components
  path: /components
---

## MMButton

主要按钮:

```tsx
import React from 'react';
import { MMButton as Button } from 'mui-pc';

export default () => (
  <>
    <Button style={{ marginRight: '10px', marginBottom: '10px' }}>
      主要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      iconUrl="https://i9.taou.com/maimai/p/29882/3186_6_21IO4iaATQKXahvi"
    >
      主要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      iconUrl="https://i9.taou.com/maimai/p/29882/3186_6_21IO4iaATQKXahvi"
    />

    <Button style={{ marginRight: '10px', marginBottom: '10px' }} size="middle">
      主要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      size="middle"
      iconUrl="https://i9.taou.com/maimai/p/29882/3186_6_21IO4iaATQKXahvi"
    >
      主要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      size="middle"
      iconUrl="https://i9.taou.com/maimai/p/29882/3186_6_21IO4iaATQKXahvi"
    />

    <Button style={{ marginRight: '10px', marginBottom: '10px' }} size="small">
      主要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      size="small"
      iconUrl="https://i9.taou.com/maimai/p/29882/3186_6_21IO4iaATQKXahvi"
    >
      主要按钮
    </Button>
    <Button style={{ marginRight: '10px', marginBottom: '10px' }} disabled>
      主要按钮
    </Button>
    <Button style={{ marginRight: '10px', marginBottom: '10px' }} loading>
      主要按钮
    </Button>
  </>
);
```

次要按钮:

```tsx
import React from 'react';
import { MMButton as Button } from 'mui-pc';

export default () => (
  <>
    <Button style={{ marginRight: '10px', marginBottom: '10px' }} type="second">
      次要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="second"
      iconUrl="https://i9.taou.com/maimai/p/29898/4750_6_627iiqVzs5RjfC5Q"
    >
      次要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="second"
      iconUrl="https://i9.taou.com/maimai/p/29898/4750_6_627iiqVzs5RjfC5Q"
    />

    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="second"
      size="middle"
    >
      次要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="second"
      size="middle"
      iconUrl="https://i9.taou.com/maimai/p/29898/4750_6_627iiqVzs5RjfC5Q"
    >
      次要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="second"
      size="middle"
      iconUrl="https://i9.taou.com/maimai/p/29898/4750_6_627iiqVzs5RjfC5Q"
    />

    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="second"
      size="small"
    >
      次要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="second"
      size="small"
      iconUrl="https://i9.taou.com/maimai/p/29898/4750_6_627iiqVzs5RjfC5Q"
    >
      次要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="second"
      disabled
    >
      次要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="second"
      loading
    >
      次要按钮
    </Button>
  </>
);
```

三级按钮:

```tsx
import React from 'react';
import { MMButton as Button } from 'mui-pc';

export default () => (
  <>
    <Button style={{ marginRight: '10px', marginBottom: '10px' }} type="third">
      三级按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="third"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    >
      三级按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="third"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    />

    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="third"
      size="middle"
    >
      三级按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="third"
      size="middle"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    >
      三级按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="third"
      size="middle"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    />

    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="third"
      size="small"
    >
      三级按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="third"
      size="small"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    >
      三级按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="third"
      disabled
    >
      三级按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="third"
      loading
    >
      三级按钮
    </Button>
  </>
);
```

无框按钮:

```tsx
import React from 'react';
import { MMButton as Button } from 'mui-pc';

export default () => (
  <>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackground"
    >
      无框按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackground"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    >
      无框按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackground"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    />

    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackground"
      size="middle"
    >
      无框按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackground"
      size="middle"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    >
      无框按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackground"
      size="middle"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    />

    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackground"
      size="small"
    >
      无框按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackground"
      size="small"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    >
      无框按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackground"
      disabled
    >
      无框按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackground"
      loading
    >
      无框按钮
    </Button>
  </>
);
```

文字按钮:

```tsx
import React from 'react';
import { MMButton as Button } from 'mui-pc';

export default () => (
  <>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="textButton"
    >
      文字按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="textButton"
      size="middle"
    >
      文字按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="textButton"
      disabled
    >
      文字按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="textButton"
      loading
    >
      文字按钮
    </Button>
  </>
);
```

警示-主要按钮:

```tsx
import React from 'react';
import { MMButton as Button } from 'mui-pc';

export default () => (
  <>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="primaryAlert"
    >
      主要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="primaryAlert"
      iconUrl="https://i9.taou.com/maimai/p/29882/3186_6_21IO4iaATQKXahvi"
    >
      主要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="primaryAlert"
      iconUrl="https://i9.taou.com/maimai/p/29882/3186_6_21IO4iaATQKXahvi"
    />

    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="primaryAlert"
      size="middle"
    >
      主要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="primaryAlert"
      size="middle"
      iconUrl="https://i9.taou.com/maimai/p/29882/3186_6_21IO4iaATQKXahvi"
    >
      主要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="primaryAlert"
      size="middle"
      iconUrl="https://i9.taou.com/maimai/p/29882/3186_6_21IO4iaATQKXahvi"
    />

    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="primaryAlert"
      size="small"
    >
      主要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="primaryAlert"
      size="small"
      iconUrl="https://i9.taou.com/maimai/p/29882/3186_6_21IO4iaATQKXahvi"
    >
      主要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="primaryAlert"
      disabled
    >
      主要按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="primaryAlert"
      loading
    >
      主要按钮
    </Button>
  </>
);
```

警示-三级按钮:

```tsx
import React from 'react';
import { MMButton as Button } from 'mui-pc';

export default () => (
  <>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="thirdAlert"
    >
      三级按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="thirdAlert"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    >
      三级按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="thirdAlert"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    />

    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="thirdAlert"
      size="middle"
    >
      三级按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="thirdAlert"
      size="middle"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    >
      三级按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="thirdAlert"
      size="middle"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    />

    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="thirdAlert"
      size="small"
    >
      三级按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="thirdAlert"
      size="small"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    >
      三级按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="thirdAlert"
      disabled
    >
      三级按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="thirdAlert"
      loading
    >
      三级按钮
    </Button>
  </>
);
```

警示-无框按钮:

```tsx
import React from 'react';
import { MMButton as Button } from 'mui-pc';

export default () => (
  <>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackgroundAlert"
    >
      无框按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackgroundAlert"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    >
      无框按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackgroundAlert"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    />

    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackgroundAlert"
      size="middle"
    >
      无框按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackgroundAlert"
      size="middle"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    >
      无框按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackgroundAlert"
      size="middle"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    />

    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackgroundAlert"
      size="small"
    >
      无框按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackgroundAlert"
      size="small"
      iconUrl="https://i9.taou.com/maimai/p/29882/6287_6_37EavZrtLq90nI"
    >
      无框按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackgroundAlert"
      disabled
    >
      无框按钮
    </Button>
    <Button
      style={{ marginRight: '10px', marginBottom: '10px' }}
      type="noBackgroundAlert"
      loading
    >
      无框按钮
    </Button>
  </>
);
```
