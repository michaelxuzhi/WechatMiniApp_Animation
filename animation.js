
show(that, name, opacity)
{
    var animation = wx.createAnimation({
        duration: 800,
        timingFunction: "ease-in-out",
        delay: 0,
    });
    animation.opacity(opacity).step();
    var json = '{"' + name + '":""}';
    json = JSON.parse(json);
    json[name] = animation.export();
    that.setData(json);
}

slideupshow(that, name, position, opacity)
{
    var animation = wx.createAimation({
        duration: 800,
        timingFunction: "ease-in-out",
        delay: 0,
    });
    animation.translateY(position).opacity(opacity).step();
    var json = '{"' + name + '":""}';
    json = JSON.parse(json);
    json[name] = animation.export();
    that.setData(json);
}

sliderightshow(that, name, position, opacity)
{
    var animation = wx.createAnimation({
        duration: 800,
        timingFunction: 'ease',
        delay: 0,
    });
    animation.translateX(position).opacity(opacity).step();
    var json = '{"' + name + '":""}';
    json = JSON.parse(json);
    json[name] = animation.export();
    that.setData(json);
}

