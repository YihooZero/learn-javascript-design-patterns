var form = new FormItem('FormItem', document.body);
form.add(
  new FieldsetItem('account', '账号').add(
    new Group().add(
      new LabelItem('user_name', '用户名:')
    ).add(
      new InputItem('user_name')
    ).add(
      new SpanItem('4到6位数字或者字母')
    )
  ).add(
    new Group().add(
      new LabelItem('user_password', '密码:')
    ).add(
      new InputItem('user_password')
    ).add(
      new SpanItem('6到12位数字或者密码')
    )
  )
).add(
//  ...
).show();